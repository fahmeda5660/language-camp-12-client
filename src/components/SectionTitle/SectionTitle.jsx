import "./SectionTitle.css"
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="sectionTitle mx-auto text-center md:w-4/12 my-6">
            <h3 className="text-5xl uppercase text-black">{heading}</h3>
            <p className="text-orange-600 mb-2 text-xl"> _____{subHeading}_____</p>
        </div>
    );
};

export default SectionTitle;
