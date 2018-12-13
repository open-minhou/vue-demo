import Vue from 'vue'
import UnitTestDemo from '@/components/UnitTestDemo'

describe('UnitTestDemo',()=>{
    it('has a created hook',()=>{
        expect(typeof UnitTestDemo.created).toBe('function')
    })
    // 评估原始组件选项中的函数的结果
  it('sets the correct default data', () => {
    expect(typeof UnitTestDemo.data).toBe('function')
    const defaultData = UnitTestDemo.data()
    expect(defaultData.message).toBe('hello!')
  })
  // 检查 mount 中的组件实例
  it('correctly sets the message when created', () => {
    const vm = new Vue(UnitTestDemo).$mount()
    expect(vm.message).toBe('bye!')
  })

  // 创建一个实例并检查渲染输出
  it('renders the correct message', () => {
    const Constructor = Vue.extend(UnitTestDemo)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).toBe('bye!')
  })
})