import usageLink from '../utils/usageLink'

const Usage = () => {
    return (
        <div className="max-w-6xl mx-auto mt-20 px-3 py-9">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Image */}
                <div className="hidden md:block col-span-1">
                    <img
                        src="/step_logo.svg"
                        alt="Step Logo"
                        className="h-full w-full object-contain"
                    />
                </div>

                {/* Steps */}
                <div className="md:col-span-2 flex flex-col justify-center gap-8 tracking-widest">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-3xl font-bold">
                            <span className="text-4xl">3</span> ຂັ້ນຕອນງ່າຍໆ
                        </h1>
                        <p className="font-semibold">
                            ໃນການຕິດຕໍ່ເຮົາອອກແບບເວັບໄຊ ແລະ ຮັບຂຽນໂປຣແກຣມ
                        </p>
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {usageLink.map((item) => (
                            <li
                                key={item.id}
                                className="bg-white p-5 rounded-xl border border-orange-200"
                            >
                                <div className="flex gap-3 items-center mb-5">
                                    <button className="bg-orange-400 px-5 py-3 rounded-xl text-xl font-bold text-white">
                                        {item.number}
                                    </button>
                                    <h1 className="font-semibold">{item.title}</h1>
                                </div>
                                <p className="text-sm leading-relaxed">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Usage