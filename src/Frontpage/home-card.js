import './home-card.css';

export default function HomeCard() {
    return (
        <div className="home-card">
            <div className="home-card-text">
                <div className="flex flex-col rounded-2xl  bg-[#ffffff] shadow-xl">
                <figure className="flex justify-center items-center rounded-2xl">
                <img src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png" alt="Card Preview" className="rounded-t-2xl" />
                </figure>
                    <div className="flex flex-col p-8">
                    <div className="text-2xl font-bold   text-[#374151] pb-6">Generator</div>
                    <div className=" text-lg   text-[#374151]">Leverage a graphical editor to create beautiful web components.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}