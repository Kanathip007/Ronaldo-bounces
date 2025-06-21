import'./hello.css';
export default function Hello({name ="Skibidi",surname="Ball",weight="1"}) {
    return (
    <>
    <img src="ronaldo.png" width={200}></img>
       <h1>
        Hello,{name}  {surname}    
        {weight} Kg.        
        </h1>
    </>
);
} 