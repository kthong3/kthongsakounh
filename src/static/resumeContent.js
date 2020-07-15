const skills = [
  'Ruby',
  'JavaScript',
  'Java',
  'Sinatra',
  'Ruby on Rails',
  'RSpec',
  'Jasmine',
  'React',
  'SQL/PostgreSQL',
  'Splunk',
  'CircleCI',
  'Git',
  'Agile Methodology',
  'Microservice Architecture',
  'Continuous Integration/Continuous Delivery',
  'Pair Programming',
  'Test Driven Development',
  'API Integration',
  'Object-Oriented Design'
]

const avalonRisk = {
  company: 'Avalon Risk Management Inc.',
  position: 'Surety Claims Specialist',
  dates: 'May 2013 - June 2015',
  description: [
    `Analyzed documentation and negotiated with US Customs to minimize loss exposure.`,
    `Minimized over $380,000 of loss exposure for national clients.`,
    `Collected from delinquent accounts for a total of $70,000.`
  ]
}

const lasalleNetwork = {
  company: 'The LaSalle Network Inc. (contracted to Madden Communications, Inc.)',
  position: 'Logistics / Client Services Coordinator',
  dates: 'June 2015 - July 2016',
  description: [
    `Consulted with Account Executives and clients to process new orders for their upcoming promotional programs.`,
    `Managed multiple projects for the client's promotional material internally, with third-party vendors and delivery
      personnel.`
  ]
}

const derickDerm = {
  company: 'Derick Dermatology',
  position: 'Patient Services - Scheduler',
  dates: 'Julu 2016 - July 2017',
  description: [
    `Served as main point of contact for clients.`,
    `Collaborated with multiple departments for scheduling urgent high risk appointments.`, 
    `Assisted clients by clarifying office policies and resolving issues.`
  ]
}

const dbc = {
  name: 'Dev Bootcamp Chicago',
  dates: 'May 2017 - October 2017',
  description: [
    `Full-Stack Web Development`,
    `Completed a 19 week intensive program with an emphasis on Agile methodologies and Engineering Empathy.`,
    `Engaged in daily challenges consisting of programming fundamentals, algorithms, and data structures in Ruby and JavaScript.`
  ]
}

const uic = {
  name: 'University of Illinois at Chicago',
  dates: '2007 - 2012',
  description: [
    'Bachelor of Arts', 
    'Liberal Arts & Sciences - Sociology'
  ]
}

const tcApprentice = {
  company: 'Nordstrom Trunk Club',
  position: 'Software Engineer in Test Apprentice',
  dates: 'January 2019 - August 2019',
  description: [
    `Developed automated software tools for testing Trunk Club's public site.`,
    `Documented and reported software defects using JIRA as our bug tracking system.`,
    `Performed accessibility and performance testing for Spring 2019 campaign and Rebranding launch.`,
    `Completed code reviews for regression tests in the Test Suite`
  ]
}

const tcSDET = {
  company: 'Nordstrom Trunk Club',
  position: 'Software Engineer in Test I',
  dates: 'September 2019 - June 2020',
  description: [
    `Developed API integration tests using Postman for the CircleCi pipeline for critical paths.`,
    `Created automated tests using Selenium Web driver, TestNG, Page Object Model(POM).`,
    `Executed tests on feature work in Trunk Club's Android, iOS, and web applications.`,
    `Participated in Apprenticeship Working Group to formalize a new apprenticeship program.`,
    `Pair programmed to develop a full-stack internal web application to manage employee teams using Ruby on backend and React/Redux on the frontend .`
  ]
}

const experience = [
  avalonRisk,
  lasalleNetwork,
  derickDerm, 
  tcApprentice,
  tcSDET
]

const education = [ uic, dbc ]

const resumeContent = [
  { key: 'skills', content: skills },
  { key: 'experience', content: experience },
  { key: 'education', content: education }
]

export default resumeContent