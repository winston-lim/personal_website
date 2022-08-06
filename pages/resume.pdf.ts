import path from 'path'
import fs from 'fs'

const Resume = () => {
  return
}

export const getServerSideProps = async ({ res }) => {
  const dataFilePath = path.join(process.cwd(), 'public', 'winston-resume.pdf')
  console.log(dataFilePath)
  const fileContents = fs.readFileSync(dataFilePath)
  console.log(fileContents)
  res.setHeader('Content-Type', 'application/pdf')
  res.write(fileContents)
  res.end()

  return {
    props: {},
  }
}

export default Resume
