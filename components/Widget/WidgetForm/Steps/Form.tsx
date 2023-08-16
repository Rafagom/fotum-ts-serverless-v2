import { CloseButton } from "../Buttons/CloseButton";
import { BackButton } from "../Buttons/BackButton";
import { Camera } from "phosphor-react";
import { ScreenshotButton } from "../Buttons/ScreenshotButton";
import { SendFormButton } from "../Buttons/SendFormButton";
import {
	onFormEndRequestedType,
	onScreenshotTookType,
	screenshotType,
	// onFormSendRequest
} from "..";
import { FormEvent, useState } from "react";
import Image from "next/image";

interface Props {
	onFormRestartRequested: () => void;
	onFormEndRequested: (type: onFormEndRequestedType) => void;
	onScreenshotTook: (type: onScreenshotTookType) => void;
	screenshot: screenshotType;
	formOption: { name: string; imgSrc: string; imgAlt: string };
}

export function Form({
	onFormRestartRequested,
	onFormEndRequested,
	onScreenshotTook,
	formOption,
	screenshot,
}: Props) {
	const [comment, setComment] = useState("");

	function handleSubmitForm(event: FormEvent, option: string) {
		event.preventDefault();
		onFormEndRequested(true);
	}

	return (
		// All form pages have the same design pattern, just changing image and text, this component reder the right form using the information received from formOption
		<>
			{
				<>
					<header className="flex text-xl leading-6 items-center gap-2 text-[#00324b  ]">
						<BackButton
							onFormRestartRequested={onFormRestartRequested}
						/>
						<Image
							src={formOption.imgSrc}
							alt={formOption.imgAlt}
							width={16}
							height={16}
						/>
						<p>{formOption.name}</p>
						<CloseButton />
					</header>
					<main className="w-full h-full ">
						<form
							onSubmit={(e) =>
								handleSubmitForm(e, formOption.name)
							}
							className="flex flex-col my-4 w-full items-center gap-2"
						>
							<textarea
								className="min-w-[304px] w-full min-h-[112px] h-full rounded border border-solid border-[#00324b] bg-inherit resize-none text-[#00324b] overflow-auto focus:border-[#ffaa00] focus:ring-[#ffaa00] focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent"
								placeholder="Tell us more!"
								onChange={(event) =>
									setComment(event.target.value)
								}
							></textarea>
							<div className="flex gap-2 w-full">
								<ScreenshotButton
									onScreenshotTook={onScreenshotTook}
									screenshot={screenshot}
								/>
								<SendFormButton
									comment={comment}
									onFormEndRequested={onFormEndRequested}
								/>
							</div>
						</form>
					</main>
				</>
			}
		</>
	);
}
