import styled from "styled-components";

/*헤더 UI*/
export const main_ui = styled.div`
    width:100%;
    height: 60px;
    border-bottom: 1px solid;
`;

export const list = styled.img`
    height: 25px;
    padding:16px 10px 0px 20px;
    float: left;
`;

export const logo = styled.img`
    width:130px;
    float: left;
`;

export const searchbox = styled.div`
    width:650px;
    height: 35px;
    margin: 10px 0px 0px calc(50% - 535px);
    border:1px solid;
    float: left;
`;

export const searchinput = styled.input`
    width:570px;
    height: 35px;
    border: 0px;
    margin: 0px;
    padding: 0px 0px 0px 15px;
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
    height: 60px;
`;

export const make = styled.img`
    margin: 0px 5px 25px 0px;
`;

export const menu = styled.img`
    width:30px;
    margin: 10px 10px 35px 10px;
`;

export const alarm = styled.img`
    width:30px;
    margin: 10px 10px 35px 10px;
`;

export const icon = styled.img`
    width:35px;
    border-radius: 100px;
    margin:15px 30px 35px 10px;
`;

/*상단 필터 사이드바*/
export const sub_ui = styled.div`
    max-width: calc(100% - 70px);
    width: 100%;
    min-width: calc(100% - 240px);
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

/*좌측 사이드바*/
export const side_long = styled.div`
    width: 232.5px;
    height: calc(100vh - 61px);
    padding-right: 7.5px;
    box-sizing: border-box;
    overflow-y: scroll;
    &:-webkit-scrollbar{
        width: 10px;
    };
    &:-webkit-scrollbar-thumb{
        background-color: #D3d3d3;
        border-radius: 5px;
    };
`;
export const side_short = styled.div`
    width: 70px;
    height: calc(100vh - 61px);
    border-right: 1px solid;
    box-sizing: border-box;
`;

export const cartegory = styled.div`
    padding: 10px 0px 10px 0px;
    border-bottom: 1px solid;
`;

export const cartegory_c = styled.div`
`;

export const CG_font = styled.p`
    margin: 5px 20px 5px 20px;
    font-size: 14px;
`;

export const Card = styled.div`
    height: 40px;
`;

export const H_img = styled.img`
    width:25px;
    margin: 7.5px 20px 7.5px 20px;
    float: left;
`;

export const CardText = styled.p` 
font-size: 14px;
height: 40px;
line-height: 40px;
margin: 0px;
float: left;
`;

export const CardText_c = styled.p` 
    text-align: center;
    font-size: 11px;
    margin: 0px 0px 0px 0px;
`;