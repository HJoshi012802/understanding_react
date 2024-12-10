import { useRef } from "react"
import Custom from "./Custom"

const ParentComponent = () => {
    const inputRef = useRef()
    
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800 text-center">
                        Custom Input Demo
                    </h2>
                    
                    <div className="space-y-2">
                        <Custom 
                            ref={inputRef}
                            placeholder="Type something..."
                            className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                        />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button 
                            onClick={() => inputRef.current.focus()}
                            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                            Focus Input
                        </button>
                        
                        <button 
                            onClick={() => inputRef.current.clear()}
                            className="flex-1 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                        >
                            Clear Input
                        </button>
                        
                        <button 
                            onClick={() => alert(inputRef.current.getValue())}
                            className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                        >
                            Get Value
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParentComponent