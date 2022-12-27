import ResumeRight from "./ResumeRight";
import ResumeLeft from "./ResumeLeft";

const Resume = () => {
    
    return(
        <div className="row mb-5">
            <h1 className="pt-4 letter-space">KHUSANOV <br></br> JAVOKHIR</h1>
            <div className="col-md-6 mt-4">
                <ResumeLeft/>
            </div>
            <div className="col-md-6 mt-4">
                <ResumeRight/>
            </div>
        </div>
    )
}

export default Resume;