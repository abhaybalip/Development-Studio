import Image from 'next/image';

function HomePage() {
    return (
        <div>
            <Image
                src={'/image/test.jpg'}
                alt="Picture of a cat"
                width={500}
                height={300}
            />
        </div>
    );
}
export default HomePage;


// Image path = .public/ image/ test.jpg
