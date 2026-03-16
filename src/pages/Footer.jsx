import { Map } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';
import { FaLine } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-10 px-10 sm:px-20 py-10'>
                <div className='flex flex-col gap-1 col-span-2 sm:col-span-1'>
                    <h1 className='text-4xl text-orange-400 font-semibold tracking-widest'>PHANTHAVY</h1>
                    <p className='font-semibold'>ບໍລິສັດ ພັນທະວີ ເທັກໂນໂລຢີ ໂຊລູຊັນ ຈຳກັດ</p>
                    <p className='text-sm'>ໜອງໄຮ ຫາດຊາຍຟອງ ນະຄອນຫຼວງວຽງຈັນ</p>
                    <div className='flex items-center gap-2 mt-2'>
                        <Map size={16} />
                        <a href="#" className='text-sm'>ແຜນທີ່ການເດີນທາງ</a>
                    </div>
                    <p className='mt-2 font-semibold text-sm'>ຕິດຕໍ່ສອບຖາມ</p>
                    <p className='text-sm'>{`ໂທ :​ +85620 55557777 ( 24hr )`}</p>
                    <p className='text-sm'>ອີເມວ : phanthavy@gmail.com​ </p>
                </div>
                <div>
                    <h1 className='text-md font-semibold'>ບໍລິການຂອງເຮົາ</h1>
                    <div className='flex flex-col gap-1 mt-2'>
                        <p><a href="#" className='text-sm'>ອອກແບບເວັບໄຊ</a></p>
                        <p><a href="#" className='text-sm'>ສ້າງເວັບໄຊ</a></p>
                        <p><a href="#" className='text-sm'>ສ້າງໂມບາຍແອັບ</a></p>
                    </div>
                </div>
                <div>
                    <h1 className='text-md font-semibold'>ຊ່ອງທາງການຕິດຕໍ່</h1>
                    <div className='flex gap-4 mt-3'>
                        <FaFacebook />
                        <FaLine />
                        <FaInstagram />
                        <FaWhatsapp />
                        <FaTiktok />
                    </div>
                </div>
            </div>
            <div className='bg-gray-800 rounded-t-3xl py-4 px-4 text-center text-sm sm:text-md'>
                <p className='text-white'>Copyright © 2026 PHANTHAVY TECHNOLOGY SOLUTION COMPANY LIMITED. ALL RIGHTS RESERVED</p>
            </div>
        </div>
    )
}
export default Footer