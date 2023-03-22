import React from 'react'

import { MdAlbum  } from "react-icons/md";

import { FaHome, FaHeart ,FaWaveSquare ,FaMicrophoneAlt } from "react-icons/fa";
import { icons } from 'react-icons/lib';
import { AiFillFolderAdd } from "react-icons/ai";

const listOfmenu = [
        {
            id : 1,
            icon : <FaHome/>,
            name :"Home",
            to : "/"
        },
        
        {
            id : 2,
            icon : <MdAlbum/>,
            name :"Discover",
            to : "/search"
        },
        {
            id : 3,
            icon : <FaHeart/>,
            name :"Favorite",
            to : "/favorite"
        },
        
      
,
    ]
    export {listOfmenu}