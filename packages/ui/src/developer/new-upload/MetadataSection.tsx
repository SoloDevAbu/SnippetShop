import { JSX } from "react/jsx-runtime";
import { InputBox } from "./InputBox";
import { TestCasesManager } from "./TestCasesManager";

export function MetadataSection(): JSX.Element {
    return (
        <div className="flex flex-col gap-4">
            {/*Title */}
            <div>
                <h1 className="font-bold text-gray-600">Title<span className="text-red-500">*</span></h1>
                <InputBox title="Code Snippet title" />
            </div>
            {/*Description */}
            <div>
                <h1 className="font-bold text-gray-600">Description<span className="text-red-500">*</span></h1>
                <InputBox title="Description of Code Snippet" />
            </div>
            {/*Tags */}
            <div>
                <h1 className="font-bold text-gray-600">Tags<span className="text-red-500">*</span></h1>
                <InputBox title="Tags (comma seperated)" />
            </div>
            {/*Test Cases */}
                <TestCasesManager initialTestCases={["Test1", "Test2", "Test3"]}/>

        </div>
    )
}