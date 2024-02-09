import React from 'react'
import { BiLogoBootstrap, BiLogoCss3, BiLogoGit, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPostgresql, BiLogoPython, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi'
import { SiCsharp, SiDocker, SiDotnet, SiExpress, SiFlask, SiMysql, SiPostman } from 'react-icons/si'
import { TbBrandDjango } from 'react-icons/tb'
import Loader from 'react-loaders'

const Skills = () => {


  return (
    <>
      <div>
        <h1 className='ml-14 text-3xl font-bold '>SK<span className=' text-slate-400'>ILLS</span></h1>
      </div>
      <div className=' flex p-14'>
        <div className='ml-20'>
          <h2 className='text-xl font-semibold underline'>Languages</h2>
          <div className='p-2 text-sm text-slate-400'><BiLogoPython className='w-20 h-20 text-sky-700'/><span className='ml-4'>Python</span></div>
          <div className='p-2 text-sm text-slate-400'><BiLogoJavascript className='w-20 h-20 text-yellow-400 '/>JavaScript</div>
          <div className='p-2 text-sm text-slate-400'><SiCsharp className='w-20 h-20 text-purple-900 '/><span className='ml-6'>C#</span></div>
        </div>
        <div className='ml-20'>
          <h2 className='text-xl font-semibold underline'>Back-End</h2>
          <div className='p-2 text-sm text-slate-400'><BiLogoNodejs className='w-20 h-20 text-green-900'/>Node JS</div>
          <div className='p-2 text-sm text-slate-400'><SiExpress className='w-20 h-20 text-green-900'/>Express JS</div>
          <div className='p-2 text-sm text-slate-400'><SiFlask className='w-20 h-20 text-gray-600'/>Flask</div>
          <div className='p-2 text-sm text-slate-400'><TbBrandDjango className='w-20 h-20 text-green-950'/>Django</div>
          <div className='p-2 text-sm text-slate-400'><SiDotnet className='w-20 h-20 text-gray-200'/></div>
        </div>
        <div className='ml-20'>
          <h2 className='text-xl font-semibold underline'>Front-End</h2>
          <div className='p-2 text-sm text-slate-400'><BiLogoHtml5 className='w-20 h-20 text-orange-700' />HTML</div>
          <div className='p-2 text-sm text-slate-400'><BiLogoCss3 className='w-20 h-20 text-blue-700' />CSS</div>
          <div className='p-2 text-sm text-slate-400'><BiLogoReact className='w-20 h-20 text-sky-400' />React</div>
          <div className='p-2 text-sm text-slate-400'><BiLogoTailwindCss className='w-20 h-20 text-cyan-500' />TailWindCss</div>
          <div className='p-2 text-sm text-slate-400'><BiLogoBootstrap className='w-20 h-20 text-purple-700' />Bootstrap</div>
        </div>
        <div className='ml-20'>
          <h2 className='text-xl font-semibold underline'>Databases</h2>
          <div className='p-2 text-xl text-slate-400'><BiLogoMongodb className="w-20 h-20 text-green-500" />MongoDB</div>
          <div className='p-2 text-xl text-slate-400'><SiMysql className="w-20 h-20 text-amber-500 " />MySQL</div>
          <div className='p-2 text-xl text-slate-400'><BiLogoPostgresql className="w-20 h-20 text-blue-950" />PostgresQL</div>
        </div>
        <div className='ml-20'>
          <h2 className='text-xl font-semibold underline'>Other Tech</h2>
          <div className='p-2 text-xl text-slate-400'><BiLogoGit className="w-20 h-20 text-amber-600"/>Git</div>
          <div className='p-2 text-xl text-slate-400'><BiLogoGithub className="w-20 h-20 text-gray-200"/>Github</div>
          <div className='p-2 text-xl text-slate-400'><SiPostman className="w-20 h-20 text-orange-600"/>Postman</div>
          <div className='p-2 text-xl text-slate-400'><SiDocker className="w-20 h-20 text-blue-500"/>Docker</div>
        </div>
      </div>
    </>
  )
}

export default Skills