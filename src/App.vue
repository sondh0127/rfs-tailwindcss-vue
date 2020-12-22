<template>
	<div id="app">
		<div class="flex items-center justify-center">
			<img alt="Vue logo" src="./assets/logo.png" />
		</div>
		<div class="bg-red-300">
			<div
				class="relative flex flex-col items-center justify-center flex-1 bg-white bg-opacity-50"
			>
				<button
					v-if="isShowResult"
					class="absolute inline-flex items-center text-sm text-white text-red-400 transition duration-150 ease-in-out bg-blue-100 border border-red-400 border-solid rounded-full rfs:px-1 rfs:py-1 rfs:top-2 rfs:right-2 focus:outline-none focus:shadow-outline disabled:cursor-not-allowed hover:bg-red-500 focus:border-red-700 active:bg-red-700 hover:text-white"
					@click="$emit('closeOverlay')"
				>
					<svg
						class="rfs:w-4 rfs:h-4"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
				<svg
					v-if="isLoading"
					class="text-orange-400 rfs:w-10 rfs:h-10 animate-spin"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						class="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						stroke-width="4"
					></circle>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
				<template v-else>
					<div class="flex flex-col items-center w-full h-full">
						<div
							class="grid w-full grid-cols-1 rfs:px-10 rfs:py-1 sm:grid-cols-2 rfs:gap-x-8 rfs:gap-y-4"
						>
							<div
								class="flex items-center w-0 min-w-full font-semibold text-orange-600 bg-white rounded-md rounded-full rfs:px-2 rfs:py-2 rfs:my-2 rfs:text-3xl sm:col-span-2"
							>
								<div class="">
									<svg
										id="Group_1_copy_11"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										x="0px"
										y="0px"
										viewBox="0 0 286.3 286.3"
										class="h-11"
										xml:space="preserve"
									>
										<g>
											<path
												fill="#D71921"
												d="M171.6,139.6l-35.9-23.7c-5.2-3.4-12,0.3-12,6.5v47.4c0,6.2,6.9,9.9,12,6.5l35.9-23.7
            C176.3,149.5,176.3,142.7,171.6,139.6z"
											/>
											<path
												fill="#D71921"
												d="M282.5,126.4h-12.4h-32.4h-23C206,95,177.4,71.9,143.3,71.9S80.6,95,72.1,126.4H48.8c8-45,47.1-79.1,94.4-79.1
            c35.6,0,66.7,19.4,83.3,48.3h48.8c-19.5-54-71.3-92.6-132-92.6C65.6,2.8,2.8,65.7,2.8,143.2c0,7,0.5,13.9,1.5,20.6h11.9h33.2h22.3
            c8.1,32.1,37.1,56,71.6,56s63.6-23.9,71.6-56h21.9c-9.4,43.1-47.8,75.4-93.7,75.4c-34,0-63.9-17.7-81-44.5H12.6
            c20.5,52,71.2,88.9,130.6,88.9c77.5,0,140.3-62.8,140.3-140.3C283.5,137.5,283.1,131.9,282.5,126.4z M143.3,197.4
            c-28.4,0-51.6-23.1-51.6-51.6c0-28.4,23.1-51.6,51.6-51.6s51.6,23.1,51.6,51.6C194.9,174.2,171.8,197.4,143.3,197.4z"
											/>
										</g>
									</svg>
								</div>
								<p class="flex-grow text-center truncate">
									Cannot read property 'data' of undefined
								</p>

								<div class="">
									<svg
										id="Group_1_copy_11"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										x="0px"
										y="0px"
										viewBox="0 0 286.3 286.3"
										class="rfs:h-11"
										xml:space="preserve"
									>
										<g>
											<path
												fill="#D71921"
												d="M171.6,139.6l-35.9-23.7c-5.2-3.4-12,0.3-12,6.5v47.4c0,6.2,6.9,9.9,12,6.5l35.9-23.7
              C176.3,149.5,176.3,142.7,171.6,139.6z"
											/>
											<path
												fill="#D71921"
												d="M282.5,126.4h-12.4h-32.4h-23C206,95,177.4,71.9,143.3,71.9S80.6,95,72.1,126.4H48.8c8-45,47.1-79.1,94.4-79.1
              c35.6,0,66.7,19.4,83.3,48.3h48.8c-19.5-54-71.3-92.6-132-92.6C65.6,2.8,2.8,65.7,2.8,143.2c0,7,0.5,13.9,1.5,20.6h11.9h33.2h22.3
              c8.1,32.1,37.1,56,71.6,56s63.6-23.9,71.6-56h21.9c-9.4,43.1-47.8,75.4-93.7,75.4c-34,0-63.9-17.7-81-44.5H12.6
              c20.5,52,71.2,88.9,130.6,88.9c77.5,0,140.3-62.8,140.3-140.3C283.5,137.5,283.1,131.9,282.5,126.4z M143.3,197.4
              c-28.4,0-51.6-23.1-51.6-51.6c0-28.4,23.1-51.6,51.6-51.6s51.6,23.1,51.6,51.6C194.9,174.2,171.8,197.4,143.3,197.4z"
											/>
										</g>
									</svg>
								</div>
							</div>
							<button
								v-for="(answer, index) in answers"
								:key="index"
								class="inline-flex items-center justify-center font-semibold text-gray-900 uppercase transition duration-150 ease-in-out bg-orange-600 border-orange-200 rounded-full shadow rfs:px-4 rfs:py-2 rfs:text-2xl rfs:border-2 focus:outline-none focus:shadow-outline hover:bg-orange-500 focus:border-orange-700 active:bg-orange-700"
							>
								<span class="truncate"> {{ answer.label }} </span>
							</button>
						</div>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
	data() {
		return {
			isShowResult: false,
			isLoading: false,
			answerStatistics: {},
			answers: [
				{ label: 'AA' },
				{ label: 'BB' },
				{ label: 'CC' },
				{ label: 'DD' },
			],
		}
	},
}
</script>

<style></style>
