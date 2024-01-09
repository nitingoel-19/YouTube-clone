

const ShimmerEffect = () => {
    return (
        <>
            <div className="w-full mr-40 mt-16">
                {/* Res Cards */}
                <div className="flex flex-wrap ml-[170px]">
                    {Array(50)
                    .fill(" ")
                    .map((e,index) => (
                        <div className="w-64 h-72 mt-10 ml-7 animate-pulse" key={index}>
                            <div className="w-64 h-40 bg-gray-200 animate-pulse rounded-xl"></div>
                            <div className="w-60 h-4 mt-4 bg-slate-300 animate-pulse rounded-md"></div>
                            <div className="w-48 h-4 mt-4 bg-slate-300 animate-pulse rounded-md"></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ShimmerEffect;