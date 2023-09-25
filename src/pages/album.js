import Image from 'next/image';
import image from "@/assets/images/ppt.png"

const Album = () => {
    return (
        <div>
            <h1 className='text-2xl text-sky-600'>This image is using by img tag</h1>
            <img src="https://cdn.sanity.io/images/3do82whm/next/4b1f008289a88f4438a1c983fb32cf1a636d9d0e-1000x667.png?w=720&h=480&fit=clip&auto=format" alt="image" />

            <h1 className='text-2xl text-sky-600'>This image is using by image component</h1>
            <Image src="https://cdn.sanity.io/images/3do82whm/next/4b1f008289a88f4438a1c983fb32cf1a636d9d0e-1000x667.png?w=720&h=480&fit=clip&auto=format" alt="image jj" width={500} height={500} layout='responsive'>
            </Image>

            <h1 className='text-2xl text-sky-600'>This image is using by image component local image</h1>
            <Image src={image} alt="image jj" width={500} height={500} layout='responsive'>
            </Image>
        </div>
    );
};

export default Album;