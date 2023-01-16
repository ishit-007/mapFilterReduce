const {getEven,getEvenUsingReduce}=require('./evenElementsFinder');
describe('',()=>{
    it('should throw TypeError when input is not an array',()=>{
        expect(()=>getEven(123)).toThrow(TypeError);
        expect(()=>getEven("abcd")).toThrow(TypeError);
    })
    it('should throw TypeError when not all elements of array are numbers',()=>{
        expect(()=>getEven([1,2,3,4,'abx',8,9])).toThrow(TypeError);
    })
    it('should throw TypeError when input is not an array',()=>{
        expect(()=>getEvenUsingReduce(123)).toThrow(TypeError);
        expect(()=>getEvenUsingReduce("abcd")).toThrow(TypeError);
    })
    it('should throw TypeError when not all elements of array are numbers',()=>{
        expect(()=>getEvenUsingReduce([1,2,3,4,'abx',8,9])).toThrow(TypeError);
    })

    it('should return [6,12,18,24] when input is [1,2,3,4,5,6,7,8,9]',()=>{
        expect(getEven([1,2,3,4,5,6,7,8,9])).toEqual([6,12,18,24]);
    })
    it('should return [6,12,18,24] when input is [1,2,3,4,5,6,7,8,9]',()=>{
        expect(getEvenUsingReduce([1,2,3,4,5,6,7,8,9])).toEqual([6,12,18,24]);
    })
})
