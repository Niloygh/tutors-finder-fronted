'use client'

import React, { useState } from 'react';
import { ModalPage } from './ModalPage';

const Btn = () => {
    const [open, setOpen] = useState(false);



    return (
        <div>
            {/* Modal */}
            <ModalPage open={open} setOpen={true} />
        </div>
    );
};

export default Btn;