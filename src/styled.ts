import styled from "styled-components";

export const main_ui = styled.div`
    width:100%;
    height: 70px;
`;

export const list = styled.img`
    height: 30px;
    padding:20px 0px 20px 30px;
    float: left;
`;

export const logo = styled.img`
    width:150px;
    float: left;
`;

export const searchbox = styled.div`
    width:650px;
    height: 40px;
    margin: 15px 0px 15px calc(50% - 535px);
    border:1px solid;
    float: left;
`;

export const searchinput = styled.input`
    width:570px;
    height: 40px;
    border: 0px;
    margin: 0px;
    padding: 0px 0px 0px 10px;
    border-right: 1px solid;
    box-sizing: border-box;
    float: left;
`;

export const searchbtn = styled.button`
    width:40px;
    margin:0px 20px 0px 20px;
`;

export const usermenu = styled.div`
    float: right;
    height: 70px;
`;

export const make = styled.img`
    margin: 0px 5px 20px 10px;
`;
export const menu = styled.img`
    width:30px;
    margin: 10px 10px 30px 10px;
`;

export const alarm = styled.img`
    width:30px;
    margin: 10px 10px 30px 10px;
  }
`
export const icon = styled.img`
    width:35px;
    border-radius: 100px;
    margin:15px 30px 30px 10px
`;

export const sub_ui = styled.div`
    width: calc(100% - 240px);
    display: flex;
    justify-content: center;
    height:50px;
    float: right;
    border-bottom: 1px solid;
`;
export const filterbtn = styled.button`
    height:30px;
    border-radius: 30px;
    background-color: white;
    border: 1px solid;
    margin: 10px 5px 10px 5px;
    padding: 0 10px 0 10px;
`;
  
export const side_ui = styled.div`
    width: 232.5px;
    height: calc(100vh - 72px);
    padding-right: 7.5px;
    box-sizing: border-box;
    overflow-y: scroll;
`;

/*
export const side_ui::-webkit-scrollbar = styled.div`
    width: 10px;
`;

export const side_ui::-webkit-scrollbar-thumb = styled.div`
    background-color: #D3d3d3;
    border-radius: 5px;
`;
*/

export const cartegory = styled.div`
    padding: 10px 0px 10px 0px;
    border-bottom: 1px solid;
`;

export const Card = styled.div`
height: 40px;
`;

export const CardText = styled.p`
font-size: 14px;
height: 40px;
line-height: 40px;
margin: 0px;
float: left;
`;