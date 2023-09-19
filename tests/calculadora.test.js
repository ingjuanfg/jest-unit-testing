const {sumar, restar, multiplicar, dividir, seno} = require('../calculadora')

test('Sumar 2 numeros', () => {
    expect(sumar(5,8).toBe=(13))
})

test('Restar 2 numeros', () => {
    expect(restar(8,3).toBe=(5))
})

test('Multiplicar 2 numeros', () => {
    expect(multiplicar(2,8).toBe=(16))
})

test('Division 2 numeros', () => {
    expect(division(8,2).toBe=(42))
})


test('Seno 2 numeros', () => {
    const mockSeno = jest.spyOn(Math, 'sin').mockReturnValue(0.5)

    const resultadoCalculadoraSeno = seno(Math.PI / 6)

    expect(mockSeno).toHaveBeenCalledWith(Math.PI /6)

    expect(resultadoCalculadoraSeno).toBe(0.5)
    
    mockSeno.mockRestore()
})

