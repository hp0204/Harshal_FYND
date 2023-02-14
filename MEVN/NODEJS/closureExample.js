function outerscope(){
    const result = [];
    function innerscope(){
        for(let i=0;i<5;i++){
            result[i] = (function inner(x){
                return function() {
                    console.log(x);
                };

            })(i);
        }
    }
    innerscope();
    for(let i=0; i<5; i++){
        result[i]();
    }
}
outerscope();