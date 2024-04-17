import React, { useState } from 'react'

function Form() {
  

  return (
    <div>
      <form >
        <div className="content">
            <div className="input-feeld">
                <label >Name</label>
                <input type="text" />
            </div>

            <div className="input-feeld">
                <label >Emai</label>
                <input 
                    type="email" 
                    />
            </div>

            <div className="input-feeld">
                <label >Birth day</label>
                <input type="date" />
            </div>

            <div className="input-feeld">
                <label >Address</label>
                <input type="text" />
            </div>

            <div className="input-feeld">
                <label >Cntact.No</label>
                <input type="number" />
            </div>

            <div className="input-feeld">
                <label >GPA</label>
                <input type="number" />
            </div>

            <div className="btn">
            <button type="button" class="btn btn-info">Update</button>
            <button type="button" class="btn btn-info">Cansel</button>

            </div>
        </div>
      </form>
    </div>
  )
}

export default Form
