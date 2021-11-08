import Head from 'next/head'
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Datablocks({text, value, color, increase}) {
    return (
        <div className={`bg-${color}-400 ring-2 ring-${color}-500 rounded-lg px-3 py-2 w-40 h-3/6 mx-2 mt-3`} >
            <h3 className="text-gray-800 text-lg font-bold">{text}</h3>
            <h5 className="text-xl text-gray-700 font-semibold inline">{value}</h5>
            <span className="text-gray-600 font-medium"> ({increase<0 ? "" : "+"}{increase})</span>
        </div>
    )
}

function Charts({chartData, key1, key2}) {
    const [visibleData, setVisibleData] = useState({})


    return (<div>
        <ResponsiveContainer className="mx-auto mt-12" width="75%" height={300}>
            <LineChart
            width={500}
            height={300}
            data={chartData}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis stroke="gray" dataKey="time" />
                <YAxis stroke="gray" />
                <Tooltip />
                <Legend onClick={(e)=>{
                    let states = {...visibleData}
                    states[e.dataKey] = !visibleData[e.dataKey]

                    setVisibleData(states)
                }}/>
                <Line hide={visibleData[key1]} type="monotone" dataKey={key1} stroke="#8884d8" />
                <Line hide={visibleData[key2]} type="monotone" dataKey={key2} stroke="#82ca9d" />

            </LineChart>
        </ResponsiveContainer>
    </div>)
}

export default function Covidid({covidjson}) {
    const covidTotal = covidjson.update.total
    const covidIncrease = covidjson.update.penambahan
    let chartData = []
    covidjson.update.harian.forEach(element => {
        chartData.push(
            {
                time: new Date(element.key).toLocaleDateString("id-ID"),
                Meninggal: element.jumlah_meninggal.value,
                Sembuh: element.jumlah_sembuh.value,
                Kasus: element.jumlah_positif.value,
                Positif: element.jumlah_dirawat.value,
                "Total Meninggal": element.jumlah_meninggal_kum.value,
                "Total Sembuh": element.jumlah_sembuh_kum.value,
                "Total Kasus": element.jumlah_positif_kum.value,
                "Total Positif": element.jumlah_dirawat_kum.value

            }
        )
    });
    return (
        <div>
            <Head>
                <title>Covid-19 Indonesia Statistics</title>
                <meta name="description" content="Hello :)" />
                <link rel="icon" href="/covidid-favicon.png" />
            </Head>
            <div className="px-10 min-h-screen bg-gray-700 py-6 flex flex-col justify-center sm:py-12">
                <h1 className="text-gray-300 font-semibold text-center text-5xl mb-6">Statistik COVID-19 Indonesia</h1>
                <div className="flex flex-wrap justify-center">
                    <Datablocks text="Kasus" value={covidTotal.jumlah_positif} increase={covidIncrease.jumlah_positif} color="yellow" />
                    <Datablocks text="Positif" value={covidTotal.jumlah_dirawat} increase={covidIncrease.jumlah_dirawat} color="red" />
                    <Datablocks text="Sembuh" value={covidTotal.jumlah_sembuh} increase={covidIncrease.jumlah_sembuh} color="green" />
                    <Datablocks text="Meninggal" value={covidTotal.jumlah_meninggal} increase={covidIncrease.jumlah_meninggal} color="red" />
                </div>

                <Charts chartData={chartData} key1="Kasus" key2="Total Kasus"/>
                <Charts chartData={chartData} key1="Positif" key2="Total Positif"/>
                <Charts chartData={chartData} key1="Sembuh" key2="Total Sembuh"/>
                <Charts chartData={chartData} key1="Meninggal" key2="Total Meninggal"/>
                
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const api = await fetch('https://data.covid19.go.id/public/api/update.json')
    const covidjson = await api.json()
    return {
        props: {
            covidjson
        }
    }
}