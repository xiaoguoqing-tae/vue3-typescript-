interface state{
    consName:ConsName,
    filed:Filed,
    errorCode?:number | string,
    today?: Array<any>,
    tomorrow?: Array<any>,
    week?: Array<any>,
    month?: Array<any>,
    year?: Array<any>,
    login?:number | string
}
enum ConsName {
    "白羊座"='白羊座',
    '处女座'="处女座",
    '金牛座'="金牛座",
    '巨蟹座'="巨蟹座",
    '摩羯座'="摩羯座",
    '射手座'="射手座",
    '狮子座'="狮子座",
    '双子座'="双子座",
    '双鱼座'="双鱼座",
    '水瓶座'="水瓶座",
    '天秤座'="天秤座",
    '天蝎座'="天蝎座"
}
enum Filed {
    TODAY='today',
    TOMORROW="tomorrow",
    WEEK='week',
    MONTH='month',
    YEAR='year'
}


export {
    state,
    ConsName,
    Filed
}