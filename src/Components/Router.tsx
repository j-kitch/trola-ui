import {Route, Routes} from "react-router";
import BoardList from "./BoardList";
import Board from "./Board/Board";

export default function Router() {
    return (
        <Routes>
            <Route path="/boards">
                <Route index={true} element={<BoardList/>}/>
                <Route path=":id" element={<Board/>}/>
            </Route>
        </Routes>
    );
}