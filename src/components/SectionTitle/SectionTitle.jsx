import "./SectionTitle.css"
const SectionTitle = ({heading, subHeading, heading1}) => {
    return (
        <div className="sectionTitle mx-auto text-center md:w-4/12 my-6">
            <h3 className="text-5xl uppercase text-black text-center">{heading}</h3>
            <h4 className="text-3xl uppercase text-black text-center">{heading1}</h4>
            <p className="text-[#2094f3] mb-2 text-xl text-center"> _____{subHeading}_____</p>
        </div>
    );
};

export default SectionTitle;
