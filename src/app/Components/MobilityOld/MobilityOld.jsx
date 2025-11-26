import Image from 'next/image'
import React from 'react'
import Pic1 from '@/app/images/MobilityOld.jpg'
import './mobilityOld.css'

export default function MobilityOld() {
    return (
        <>
            <div className='MobilityOldMainSec'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="MobilityOldLeftSec">
                                <div className='ImageSec'>
                                    <Image src={Pic1} alt='MobilityOldImg' className='MobilityOldImg' />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="MobilityOldRightSec">
                                <div className='MobilityOldTextSec'>
                                    <h2 className='MobilityOldTitle mb-4'>Our range includes
                                        Scooters</h2>
                                        <b className='pb-4'>Adnacare support services Assist supplies mobility equipment to individuals, aged care facilities, homes and hospitals, offering a broad range of solutions to ensure the best outcomes for those in need.</b>
                                    <ul>
                                        <li>Continence Management Product</li>
                                        <li>Wheelchairs – Standard, Power, Active, Tilt-n-Space, Paediatric, Sports</li>
                                        <li>Safe Patient Handling – Lifters, Transfer Aids and Accessories</li>
                                        <li>Beds and Furniture</li>
                                        <li>Access Ramps – for wheelchairs and other mobility aids</li>
                                        <li>Pressure and Posture Care, Seating & Positioning</li>
                                        <li>Respiratory – Portable, Stationary Concentrators</li>
                                        <li>Access/ Evacuation – portable stair climbers and emergency evacuation aids</li>
                                        <li>Bathroom/ toilet – commodes, chairs, Grab Handles, Bath Equipment, Hygiene</li>
                                        <li>Bedroom – bed rails, mattresses and overlays, electric beds</li>
                                        <li>Falls prevention, Mats, Aids for Daily Living</li>
                                        <li>Therapeutic Surfaces</li>
                                      
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
