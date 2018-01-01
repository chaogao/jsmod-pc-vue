let code = {};

code.base = `
\`\`\`javascript
<template>
  <mod-select v-model="selectValue">
    <mod-select-item :value="1" label="测试1">测试1</mod-select-item>
    <mod-select-item :value="2" label="测试2">测试2</mod-select-item>
  </mod-select>

  <p>绑定v-model: {{ selectValue }}</p>
</template>
\`\`\`
`;

code.style = `
\`\`\`javascript
  <mod-select :customStyle="{width: '500px', height: '40px', backgroundColor: '#ff5a00', color: '#fff'}" placeholderColor="#fff" openedBorderColor="#fa0" v-model="selectValue">
    <mod-select-item :value="1" label="测试1">测试1</mod-select-item>
    <mod-select-item :value="2" label="测试2">测试2</mod-select-item>
  </mod-select>
\`\`\`
`;

code.event = `
\`\`\`javascript
  <mod-select v-model="selectValue3" @change="onChange">
    <mod-select-item :value="1" label="测试1">测试1</mod-select-item>
    <mod-select-item :value="2" label="测试2">测试2</mod-select-item>
  </mod-select>
\`\`\`
`;

code.change = `
\`\`\`javascript
  <mod-select v-model="selectValue4" >
    <mod-select-item :value="1" label="测试1">测试1</mod-select-item>
    <mod-select-item :value="2" label="测试2">测试2</mod-select-item>
  </mod-select>

  <a @click="selectValue4 = 2" href="javascript:void(0)">改变 {{ selectValue4 }}</a>
\`\`\`
`;


code.disabled = `
\`\`\`javascript
  <mod-select :disabled="true" v-model="selectValue4" >
    <mod-select-item :value="1" label="测试1">测试1</mod-select-item>
    <mod-select-item :value="2" label="测试2">测试2</mod-select-item>
  </mod-select>

  <a @click="selectValue4 = 2" href="javascript:void(0)">改变 {{ selectValue4 }}</a>
\`\`\`
`;

export default code;
