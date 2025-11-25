import { FiSmile, FiBriefcase, FiTrendingUp } from 'react-icons/fi';

const RakibulProfile = () => {
    const skills = ['html', 'css', 'tailwindcss', 'javascript', 'typescript', 'reactjs', 'nextjs', 'nodejs', 'expressjs', 'mongodb'];
    const stats = [
        { label: 'Client Satisfaction', value: '98%', icon: FiSmile },
        { label: 'Completed Projects', value: '35+', icon: FiBriefcase },
        { label: 'Running Projects', value: '4', icon: FiTrendingUp },
    ];
    const projects = [
        {
            title: 'Studfolio Dashboard',
            description: 'Interactive student portfolio dashboard featuring analytics and personalized feeds.',
            image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=900&q=60',
            codeUrl: '#',
            liveUrl: '#',
        },
        {
            title: 'Learning Platform UI',
            description: 'Responsive UI kit for an online learning platform with focus on accessibility.',
            image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=60',
            codeUrl: '#',
            liveUrl: '#',
        },
        {
            title: 'Learning Platform UI2',
            description: 'Responsive UI kit for an online learning platform with focus on accessibility2.',
            image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=60',
            codeUrl: '#',
            liveUrl: '#',
        },
    ];
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

                {/* about section */}
                <section className="!mt-16 text-center">
                    <div className="max-w-3xl !mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
                        <p className="!mt-6 text-lg text-gray-600">
                            Hello, I am Rakibul Hasan, a passionate Front End and MERN stack web developer with a keen eye for design and a love for crafting seamless user experiences.
                        </p>
                    </div>

                    <div className="!mt-10 grid gap-6 md:grid-cols-3">
                        {stats.map((card) => (
                            <div
                                key={card.label}
                                className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/90 text-white !py-8 !px-4 shadow-lg space-y-4 text-center"
                            >
                                <card.icon className="text-4xl text-white !mx-auto" aria-hidden="true" />
                                <h3 className="!my-4 text-4xl font-extrabold text-white">{card.value}</h3>
                                <p className="text-gray-200 font-semibold uppercase tracking-wide text-sm">
                                    {card.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* projects section */}
                <section className="!mt-16">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900">Projects Samples</h2>
                        <p className="!mt-4 text-gray-600">
                            A small taste of recent work exploring modern stacks and seamless experiences.
                        </p>
                    </div>

                    <div className="!mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <article
                                key={project.title}
                                className="group rounded-3xl border border-gray-200 bg-white shadow-lg overflow-hidden flex flex-col"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover rounded-t-3xl transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex-1 !p-6 space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
                                        <p className="!mt-2 text-gray-600">{project.description}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 !mt-3">
                                        <a
                                            href={project.codeUrl}
                                            className="inline-flex items-center justify-center rounded-full !bg-black !px-5 !py-1 text-sm font-semibold !text-white border border-transparent hover:!bg-transparent hover:!border-gray-900 hover:!text-gray-900 !transition !duration-500"
                                        >
                                            Code
                                        </a>
                                        <a
                                            href={project.liveUrl}
                                            className="inline-flex items-center justify-center rounded-full bg-gray-900 !px-5 !py-2 text-sm font-semibold text-white hover:!bg-black !transition"
                                        >
                                            Live Preview
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default RakibulProfile;