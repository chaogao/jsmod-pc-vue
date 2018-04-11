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

code.max = `
\`\`\`javascript
  <mod-select  v-model="selectValue5" :maxHeight="100">
    <mod-select-item :value="1" label="测试1">测试1</mod-select-item>
    <mod-select-item :value="2" label="测试2">测试2</mod-select-item>
    <mod-select-item :value="3" label="测试3">测试3</mod-select-item>
    <mod-select-item :value="4" label="测试4">测试4</mod-select-item>
    <mod-select-item :value="5" label="测试5">测试5</mod-select-item>
    <mod-select-item :value="6" label="测试6">测试6</mod-select-item>
    <mod-select-item :value="7" label="测试7">测试7</mod-select-item>
  </mod-select>
\`\`\`
`;

export default code;
