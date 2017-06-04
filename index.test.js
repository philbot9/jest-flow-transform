const flowRemoveTypesMock = jest.fn(() => ({ toString: jest.fn() }))
jest.setMock('flow-remove-types', flowRemoveTypesMock)

const preprocessor = require('./index')

describe('jest-flow-transform', () => {
  it('exports an object with a "process" function', () => {
    expect(preprocessor.process).toBeDefined()
    expect(preprocessor.process).toBeInstanceOf(Function)
  })

  it('transforms src using flow-remove-types', () => {
    const src = 'some flow code'
    preprocessor.process(src, 'filename')
    expect(flowRemoveTypesMock).toHaveBeenCalledWith(src)
  })

  it('returns transformed src as a string', () => {
    const transformedSrc = 'transformed flow code'
    flowRemoveTypesMock.mockReturnValueOnce({
      toString: jest.fn(() => transformedSrc)
    })
    expect(preprocessor.process('src', 'filename')).toBe(transformedSrc)
  })
})
