import React,{ useState } from 'react'
import List from './List';

export default function main() {
    const [item, setItem] = useState("");
    const [items, setItems] = useState([])
    return (
        <div className="App">
            <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
                <input type='text' placeholder='Enter Item' value={item} onChange={(e) => { setItem(e.target.value) }} style={{ padding: "15px", margin: "10px" }} />
                <button style={{
                    padding: "15px", margin: "10px", backgroundColor: 'lightblue'
                }} onClick={() => {
                    if (item !== "") {
                        setItems([...items, { text: item }]);
                        setItem("");
                    }
                }}>Add item</button>
            </div>
            <List items={items} setItems={setItems} />
        </div>
    )
}
