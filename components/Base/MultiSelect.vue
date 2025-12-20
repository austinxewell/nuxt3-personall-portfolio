<template>
    <div class="relative w-full dropdown-wrapper">
        <input
            v-model="filter"
            :placeholder="placeholder"
            class="w-full rounded-lg border px-3 py-2 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            @focus="isOpen = true"
        />

        <ul
            v-if="isOpen && filteredOptions.length"
            class="absolute z-10 w-full max-h-60 overflow-auto mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg"
        >
            <li
                v-for="item in filteredOptions"
                :key="item.id"
                class="px-3 py-2 flex gap-4 items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                @click="$emit('select', item)"
            >
                {{ item.name }}
                <UIcon v-if="isSelected(item)" name="lucide:check" />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { MultiSelectOption } from '~/types/multiSelect'

interface Props {
    options: MultiSelectOption[]
    placeholder?: string
    selected?: MultiSelectOption[]
}

const props = defineProps<Props>()
defineEmits<{(e: 'select', value: MultiSelectOption): void }>()

const filter = ref('')
const isOpen = ref(false)

const filteredOptions = computed(() =>
    props.options.filter((option) =>
        option.name.toLowerCase().includes(filter.value.toLowerCase())
    )
)

function isSelected(option: MultiSelectOption) {
    return props.selected?.some(sel => sel.id === option.id)
}

function handleClickOutside(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('.dropdown-wrapper')) isOpen.value = false
}

document.addEventListener('click', handleClickOutside)
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>
