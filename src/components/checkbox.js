import React from 'react'

export const Check = () => {
  return (<div>

<input
  type="checkbox"
  id="react-option"
  value=""
  class="hidden peer"
  required=""/>
<label
  for="react-option"
  class="flex items-center justify-center w-4 h-4   [box-shadow:1px_1px_0px_2px_#1e1e1e] duration-300 hover:[box-shadow:1px_1px_0px_1px_#000] hover:translate-y-0.5 hover:translate-x-0.5 bg-neutral-700 border-2 border-gray-800 rounded-full cursor-pointer text-neutral-50 peer-checked:[box-shadow:1px_1px_0px_2px_#28AB6B] peer-checked:border-none peer-checked:hover:[box-shadow:1px_1px_0px_1px_#28AB6B] peer-checked:bg-neutral-50 peer-checked:text-gray-800"
>
  <span class="text-lg font-semibold"></span>
</label>
  </div>

  )
}
export default Check;
