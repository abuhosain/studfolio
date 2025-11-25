const RakibulProfile = () => {
    const skills = ['html', 'css', 'tailwindcss', 'javascript', 'typescript', 'reactjs', 'nextjs', 'nodejs', 'expressjs', 'mongodb'];

    return (
        <div className="bg-gray-50 text-white shadow-xl !py-10 !text-black">
            {/* main wrapper container */}
            <div className="!max-w-7xl !mx-auto !px-6">
                {/* banner section */}
                <section className="relative !w-full lg:h-[460px] overflow-hidden !rounded-t-3xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-900 to-gray-900" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_60%)] opacity-70" />
                    <div className="relative z-10 flex h-full flex-col-reverse !gap-10 !p-10 text-white sm:flex-row sm:items-center sm:!gap-14 sm:!p-14 lg:!pr-20">
                        <div className="flex-1 text-center md:text-left">
                            <span className="text-3xl font-semibold">Hello,</span>
                            <h1 className="text-4xl sm:text-5xl font-extrabold !my-4">I&apos;m Rakibul Hasan</h1>
                            <p className="text-3xl text-white/80 font-bold">Web Developer</p>
                        </div>
                        <div className="flex-1 flex justify-center sm:justify-end">
                            <div className="relative h-56 w-56 rounded-full border-4 border-white/60 bg-white/10 p-2 shadow-2xl backdrop-blur">
                                <img
                                    src="https://randomuser.me/api/portraits/men/75.jpg"
                                    alt="Rakibul Hasan portrait"
                                    className="h-full w-full rounded-full object-cover"
                                />
                                <div className="absolute inset-0 rounded-full border border-white/30 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* skills marquee section */}
                <div className="!rounded-b-3xl !w-full bg-black text-white overflow-hidden">
                    <marquee className="flex items-center h-[60px] uppercase">
                        <div className="flex gap-x-10">
                        {skills.map((skill) => (
                            <h3 key={skill} className="text-lg">
                                {skill}
                            </h3>
                        ))}
                        </div>
                    </marquee>
                </div>
            </div>
        </div>
    );
};

export default RakibulProfile;