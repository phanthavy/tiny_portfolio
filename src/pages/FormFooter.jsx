import { ArrowUpRight, Bold } from 'lucide-react';

const FormFooter = () => {
    return (
        <div className="bg-orange-300 rounded-4xl p-10 tracking-wider">
            <form>
                <div className="font-bold text-gray-900 flex flex-col gap-3">
                    <p className="text-md">ຕິດຕໍ່ສອບຖາມ</p>
                    <h1 className="text-xl">ຍິນດີໃຫ້ຄຳປຶກສາ ປະເມີນລະຍະເວລາພັດທະນາ ແລະ ງົບປະມານດຳເນີນງານອອນໄລຟຣີ</h1>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-6">
                    <select className="col-span-1 text-gray-500 bg-white rounded-4xl py-3 px-4 w-full outline-none">
                        <option value="">ເລຶອກຫົວຂໍ້ບໍລິການ</option>
                        <option value="web_design">web design : ອອກແບບເວັບໄຊ</option>
                        <option value="web_applicaiton">web application : ສ້າງເວັບໄຊ</option>
                        <option value="mobile_application">mobile application : ສ້າງໂມບາຍແອັບ</option>
                    </select>
                    <input
                        type="text"
                        placeholder="ຊື່ - ນາມສະກຸນ"
                        className="col-span-2 bg-white rounded-4xl py-3 px-4 w-full outline-none" />
                </div>
                <div className="grid grid-cols-3 gap-6 mt-6">
                    <input
                        type="text"
                        placeholder="ຊື່ ບໍລິສັດ"
                        className=" bg-white rounded-4xl py-3 px-4 w-full outline-none" />
                    <input
                        type="text"
                        placeholder="ເບີໂທລະສັບ"
                        className=" bg-white rounded-4xl py-3 px-4 w-full outline-none" />
                    <input
                        type="text"
                        placeholder="ອີເມວ"
                        className=" bg-white rounded-4xl py-3 px-4 w-full outline-none" />
                </div>
                <div className="flex gap-6 mt-6">
                    <input
                        type="text"
                        placeholder="ລາຍລະອຽດ"
                        className="flex-1 bg-white rounded-4xl py-3 px-4 outline-none" />
                    <butto className="flex justify-center gap-2 font-semibold text-white bg-gray-900 rounded-4xl py-3 px-4 w-50 outline-none">
                        ສົ່ງຂໍ້ຄວາມ
                        <ArrowUpRight />
                    </butto>
                </div>
            </form>
        </div>
    )
}
export default FormFooter