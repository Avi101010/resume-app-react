const ResumeLeft = () => {
    const skills = [
        'Customer Service',
        'POS',
        'Communication & Presentation',
        'Time Management',
        'Attention to detail',
        'Flexibility',
        'Fast Learner',
        'MS Office',
        'Google Suit',
        'Google Analytics',
        'Python',
        'SQL'
    ];
    
    
    return (
        <div>
            <div className="mt-4"> 
                <h4>CONTACT</h4>
                <p className="mb-0">0402041516</p>
                <p>xjavohi005@gmail.com</p>
            </div>
            
            <div className="mt-4"> 
                <h4>EDUCATION</h4>
                <h5>BACHELOR OF DATA SCIENCE</h5>
                <p className="mb-0">SP Jain School of Data Science | <br></br>Sydney, Australia</p>
                <h6>Jan 2021 - Jun 2024</h6>
                        
                <br></br>
                
                <h5>ACCOUNTING AND AUDIT</h5>
                <p className="mb-0">Tashkent Economic College | <br></br>Tashkent, Uzbekistan</p>
                <h6>Sep 2017 - May 2020</h6>
            </div>
            
            <div className="mt-4"> 
                <h4>SKILLS</h4>
                {
                skills.map((m, i) => {
                return <p className="mb-0">{m}</p>;
                })
                }
            </div>
            
            <div className="mt-4"> 
                <h5>SALES ASSISTANT</h5>
                <p className="mb-0">Elmakon, Tashkent, Uzbekistan</p>
                <h6>July 2018 - December 2018</h6>
                <ul>
                    <li>Consulting customers regarding electronic <br></br>devices choices( mobile phone, TV, laptop)</li>
                    <li>Providing daily sales reports</li>
                    <li>Monitoring outstanding and cleared debts</li>
                    <li>Experience in commercial program 1.C</li>     
                </ul>
            </div>   
        </div>
    );
}

export default ResumeLeft;


