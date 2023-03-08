import React from 'react'
import styles from '@/style'


const Services = () => {
  return (
    <section className={`${styles.paddingY}`}> 
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">1</div>
            <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-cyan-100">2</div>
            <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-red-400">3</div>
            <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-green-500">4</div>
            <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-blue-500">5</div>
            <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-yellow-500">6</div>
        </div> */}

        <div className="grid gap-6 grid-cols-fluid">
            <div className="box text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100"></div>
            <div className="box text-6xl border-2 border-gray-300 rounded-xl p-6 bg-red-500"></div>
            <div className="box text-6xl border-2 border-gray-300 rounded-xl p-6 bg-cyan-500"></div>
            <div className="box text-6xl border-2 border-gray-300 rounded-xl p-6 bg-blue-400"></div>
            <div className="box text-6xl border-2 border-gray-300 rounded-xl p-6 bg-yellow-500"></div>
            <div className="box text-6xl border-2 border-gray-300 rounded-xl p-6 bg-green-700"></div>
        </div>
    </section>
  )
}

export default Services