'use client'

import React, { useState } from 'react';
import { ModalPage } from './ModalPage';

const Btn = ({tutor}) => {
    const [open, setOpen] = useState(false);



    return (
        <div>
            {/* Modal */}
            <ModalPage open={open} setOpen={true} tutor={tutor} />
        </div>
    );
};

export default Btn;