import React,{memo} from 'react';

 function Search({ onChange }) {

    console.log("Search Child Component is Rendered in the screen !!!")
    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Search user ..."
                className="w-[300px] px-3 py-2 border rounded"
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

export default memo(Search);
