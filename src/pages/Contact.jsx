import { PhoneCall } from 'lucide-react'
import { SiWhatsapp } from 'react-icons/si'

const Contact = () => {
    return (
        <div className="flex justify-end px-4 py-2 bg-orange-50 font-semibold text-sm">
            <p className='flex gap-2 items-center'>
                <PhoneCall className='h-4 w-4' />
                <SiWhatsapp className='h-4 w-4' />
                {`+85620 55557777 ( 24hr )`}
            </p>
        </div>
    )
}
export default Contact