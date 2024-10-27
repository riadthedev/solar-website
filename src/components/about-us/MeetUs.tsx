import { data } from "framer-motion/client";
import SectionHeader from "../home/SectionHeader"
import SectionWrapper from "../home/SectionWrapper"

interface ExpertCardsProps {
  data: {name: string, role: string}[];
}

const ExpertCards:React.FC<ExpertCardsProps> = ({data}) => {
  return (
    <>
     {data.map((person, index) =>  
        <div className="w-[29.75rem] h-[35.7rem] bg-gradient-to-b from-[#FFFFFF] to-[#838383] flex justify-center items-end pb-[2rem]" key={index}>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-[2.2rem] text-white leading-[2.42rem]">{person.name}</p>
            <p className="text-[#96D055] text-[1.6rem] leading-[2.56rem]">{person.role}</p>
          </div>
        </div>
      )}
    </>
  )
}

const MeetUs = () => {
  return (
    <>
        <SectionWrapper>
            <SectionHeader highlight='OUR PROJECTS' hightlightStyle='text-primary bg-secondary' title='Meet the experts behind the energy revolution'>
                <p className='w-1/2 text-center text-[#737577] self-center' data-aos='fade-left'>
                SolarRoof was founded by two exceptionally talented individuals with
                extensive industry experience. Their experience and distinctive skill sets give a
                competitive advantage to the company. With their guidance, the organisation
                has become one of the fastest-growing companies in the solar industry.
                </p>
            </SectionHeader>
            <section className="flex justify-between">
              <ExpertCards 
                data={[
                  {name: 'James Anderson', role: 'Project Manager'},
                  {name: 'Olivia Smith', role: 'Installation Supervisor'},
                  {name: 'Michael Nguyen', role: 'Energy Analyst'},
                  {name: 'Daniel Martinez', role: 'Technician'},
                ]}
              />
            </section>
        </SectionWrapper>
    </>
  )
}

export default MeetUs