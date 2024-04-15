import React from 'react'
import { Link } from 'react-router-dom'
import backImg  from "../assets/backimg.svg"
import dropImg from "../assets/dropdownn.svg"
const NewTask = () => {
  return (
    <>
    <div>
      <main className="container">
        {/* header part */}
        <h2 className="">
          <Link to='/alltask' className='d-flex my-5 headers new-task-header text-decoration-none ms-1 gap-3 align-items-center'>
            <img src={backImg} alt="" />
            New Task
          </Link>
        </h2>

        {/* task title input */}
        <div className="new-task-container"><input type="text" placeholder='E.g Project Defense, Assignment ...' className="p-3 rounded-1 w-100" /><label htmlFor="" className="task-title">Task Title</label></div>

        {/* task description input */}
        <div className='new-task-container mt-5 '>
          
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            className=' p-3 rounded-1 w-100'
            placeholder='Briefly describe your task...'
          ></textarea>
          <label htmlFor='' className='task-title'>
            Description
          </label>
        </div>

        {/* task title input */}
        <div className='new-task-container mt-5 '>
          <input type='text' className=' Tags-input p-3 rounded-1 w-100' />
          <div className='tags-btn'>
            <button className='btn urgent-important-btn ms-3 rounded-1'>
              Urgent
            </button>
            <button className='btn  urgent-important-btn ms-3 rounded-1 '>
              Important
            </button>
          </div>
          <img src={dropImg} alt='drop' className='drop-img' />

          <label htmlFor='' className='task-title'>
            Tags
          </label>
        </div>

        {/* done btn */}
        <button className='btn btn-lg mt-5 w-100 done-task-btn rounded-1'>
          Done
        </button>

        {/* back to top link */}
        <div className='text-center mt-5 pb-3 '>
          <a href='' target='blank' className='new-task-link '>
            Back To Top
          </a>
        </div>
      </main>
    </div>
    </>
  )
}

export default NewTask