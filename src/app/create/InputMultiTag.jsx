import { useState } from "react";
import { Controller } from "react-hook-form";
import { X } from 'lucide-react';
import { MagicMotion } from 'react-magic-motion';

export default function InputMultiTag ({ control, name, placeholder = "", maxTags = 10, maxLength = 100 }) {
	const [inputValue, setInputValue] = useState("");

	return (
		<Controller
			name={name}
			control={control}
			defaultValue={[]}
			render={({ field: { value = [], onChange } }) => {
				const addTag = (e) => {
					e.preventDefault();
					if (!inputValue.trim() || value.length >= maxTags || inputValue.length < 2) return;
					onChange([inputValue.trim(), ...value]);
					setInputValue("");
				};

				const removeTag = (tag) => {
					onChange(value.filter((t) => t !== tag));
				};

				return (
					<div>
						<div className="flex gap-2 my-2">
							<input
								type="text"
								maxLength={maxLength}
								minLength={2}
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
								onKeyDown={(e) => e.key === "Enter" && addTag(e)}
								placeholder={placeholder}
								className='px-4 py-2 rounded-lg outline w-full outline-border/50 '
							/>
							<button type="button" onClick={addTag} disabled={value.length >= maxTags} className='rounded-lg px-4 py-2 mt-1 disabled:cursor-not-allowed not-disabled:cursor-pointer outline outline-primary not-disabled:active:scale-95 transition-transform' >
								Add
							</button>
						</div>

						<MagicMotion>
							<ul className="flex gap-2 flex-wrap">
								{value.map((tag, i) => (
									<li key={i} className="flex items-center justify-center gap-2 rounded-lg px-4 py-1">
										{tag}
										<button type="button" onClick={() => removeTag(tag)} className="ml-1 text-red-500 cursor-pointer hover:scale-110 transition-transform">
											<X size={20} strokeWidth={1.3} key="exclude" />
										</button>
									</li>
								))}
							</ul>
						</MagicMotion>
					</div>
				);
			}}
		/>
	);
}