import './Home.css'
import shin2 from '../../assets/shin2.jpeg'
import shin from '../../assets/shin.jpeg'
import ceo from '../../assets/ceo.jpg'

const Home = () => {
    return (
        <div className='Home-Container'>
            <div className='Home-Header'>
                <h1 className='text1' >Welcome to Shining Stars International Academy</h1>
                <p className='text2' >Where Excellence Meets Innovation in Education</p>
            </div>


            <div className='vimi-secion'>
                <div className='vi'>
                    <h1 className='viheading' >Our Vision</h1>
                    <h2 className='vitext' >Shining Stars International Academy’s vision is to empower each indivídual in a positive and inspiring learning community that cultivates creativity, innovation and agency.</h2>
                </div>

                <div className='mi'>
                    <h1 className='miheading'>Our Mision</h1>
                    <h2 className='mitext' > We nurture each learner’s potential in a challenging and supportive academic community, fostering student success and global citizenship. </h2>
                </div>
            </div>


            <div className='form'>
                <div className='applyform'>
                    <h3 className='apply'>Apply for Admission</h3>
                </div>
                <div className='addmissiondiv'>
                    <h4 className='addmision' > Admission into Shining Stars International Academy Campuses’s for 2026/2027 Academic Session is in progress.</h4>
                </div>
                <div className='button' >
                    <button className='Dbutton' >Download Application form</button>
                    <button className='Sbutton' >Schedule a visit</button>
                </div>
            </div>


            <div className='backgimg'>
                <img className='backim' src={shin} alt="img" />
                <img className='backim' src={shin} alt="img" />
            </div>


            <div className='Home-Content'>
                <img src={shin2} alt="shinimg" className='shine2' />
                <div className='allcontent'>
                    <h1 className='WelcomeAddress' >Welcome Address</h1>
                    <img src={ceo} alt="directorsimg" className='directorsimg' />
                    <div className='cardname' >
                        <h5 className='Mary' >Mrs. Mary Olusike Kehinde</h5>
                        <h4 className='Executive' > Executive Director,Shining Stars Academy</h4>
                    </div>
                    <p className='text3' >Shining Stars International Academy was established in 1995 starting with Shining Star Nursery and Primary School, Lagos, Nigeria.
                        Our Aim at Shining Star International Academy is to be widely acclaimed locally and internationally as a school that trains and turns out students who have been adequately prepared for tertiary education and life.
                        Our Mission Statement is “To produce the total child through a holistic education programme that benchmarks best practices while being socially responsible.”</p>
                </div>
            </div>

            <div className='details-section'>
                <div className='details-Card1'>
                    <header className='details-heading1'>Vibrant International Community</header>
                    <p className='details-notes1' >With students from more than 60 nationalities, our vibrant community nurtures global-mindedness, intercultural understanding, and friendships that last a lifetime.</p>
                </div>

                <div className='details-Card2'>
                    <header className='details-heading2'>Contentious Evolution</header>
                    <p className='details-notes2' >Committed to antagonistic development, we cultivate creativity, wellbeing, and character through diverse experiences in the arts, sport, service, and leadership.</p>
                </div>

                
                <div className='details-Card3'>
                    <header className='details-heading3'>Superiority in Multinational Education</header>
                    <p className='details-notes3' >Experience academic excellence at an accredited IB World School — offering the PYP, MYP, and DP, and preparing students for success at top universities around the world.</p>
                </div>

                <div className='details-Card4'>
                    <header className='details-heading4'>Personalised Learning Environment</header>
                    <p className='details-notes4' >Small class sizes and a supportive, inclusive atmosphere where every student is known, challenged, and inspired to reach their potential.</p>
                </div>
            </div>
        </div>
    )
}

export default Home