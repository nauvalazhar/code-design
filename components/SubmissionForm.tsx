'use client';

import {
  SubmissionMode,
  handleCreateSubmission,
  handleUpdateSubmission,
} from 'app/actions';
import { loadTechs } from 'app/actions';
import { Button } from 'components/Button';
import EmptyState, {
  EmptyStateDescription,
  EmptyStateImage,
  EmptyStateTitle,
} from 'components/EmptyState';
import FileUpload from 'components/FileUpload';
import {
  Field,
  FieldAsterisk,
  FieldHelp,
  FieldMessage,
  Input,
  Label,
  Textarea,
} from 'components/Form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from 'components/Select';
import TechSelector from 'components/TechSelector';
import { Interfaces } from 'doodle-icons';
import Image from 'next/image';
import dumpingDoodle from 'public/DumpingDoodle.png';
import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { techIdsSchema } from 'schemas/submission_techs';
import {
  Submission,
  insertSubmissionSchema,
  phaseEnums,
} from 'schemas/submissions';
import type { Tech } from 'schemas/techs';
import { z } from 'zod';

const initialState: {
  success: boolean | undefined;
  error?: z.inferFlattenedErrors<typeof insertSubmissionSchema>['fieldErrors'] &
    z.inferFlattenedErrors<typeof techIdsSchema>['fieldErrors'];
} = {
  success: undefined,
};

type SubmissionFormProps = {
  challenge: string;
  submissionId?: Submission['id'];
  defaultValues?: Pick<
    Submission,
    'demo' | 'repository' | 'description' | 'note' | 'image' | 'phase'
  > & {
    techs: Tech[];
  };
  mode?: SubmissionMode;
};

const SubmissionForm = ({
  challenge,
  submissionId,
  defaultValues,
  mode = 'create',
}: SubmissionFormProps) => {
  let action = handleCreateSubmission.bind(null, challenge);

  if (mode === 'edit' || mode === 'review') {
    action = handleUpdateSubmission.bind(null, submissionId);
  }

  const [state, formAction] = useFormState(action, initialState);
  const [phase, setPhase] = useState<Submission['phase'] | undefined>(
    defaultValues?.phase
  );

  function handlePhaseChange(value: Submission['phase']) {
    setPhase(value);
  }

  if (state.success) {
    return (
      <EmptyState>
        <EmptyStateImage src={dumpingDoodle} alt="Dumping Doodle" />
        <EmptyStateTitle>Your submission has been received!</EmptyStateTitle>
        <EmptyStateDescription>
          Thank you for participating in the challenge. Your submission will be
          reviewed by our team and will be published on the website once it is
          approved.
        </EmptyStateDescription>
      </EmptyState>
    );
  }

  return (
    <form action={formAction}>
      <Field>
        <Label>
          Demo URL
          <FieldAsterisk />
        </Label>
        <Input
          name="demo"
          placeholder="https://"
          required
          defaultValue={defaultValues?.demo}
        />
        <FieldMessage message={state.error?.demo} />
        <FieldHelp>
          Provide a link to your live demo. Include the full URL, including the
          http:// or https:// prefix.
        </FieldHelp>
      </Field>
      <Field>
        <Label>
          Repository
          <FieldAsterisk />
        </Label>
        <Input
          name="repository"
          placeholder="https://github.com/"
          required
          defaultValue={defaultValues?.repository}
        />
        <FieldMessage message={state.error?.repository} />
        <FieldHelp>
          Every submission must include a link to the source code. This would be
          useful for other participants to learn from your code and grow the
          open source community. Include the full URL, including the http:// or
          https:// prefix.
        </FieldHelp>
      </Field>
      <Field>
        <Label>Description</Label>
        <Textarea
          name="description"
          rows={8}
          defaultValue={defaultValues?.description}
        />
        <FieldHelp>
          Describe the approach you took to implement the design. What
          challenges did you face? What did you learn? What would you do
          differently next time?
        </FieldHelp>
      </Field>
      <Field>
        <Label>
          Tech Stack <FieldAsterisk />
        </Label>
        <TechSelector
          loadFunc={loadTechs}
          defaultValue={defaultValues?.techs}
        />
        <FieldMessage message={state.error?.techs} />
        <FieldHelp>
          Select the technologies you used in your project. This will help other
          participants understand the tools you used to build your project.
        </FieldHelp>
      </Field>
      {mode === 'review' ? (
        <>
          <Field>
            <Label>
              Screenshot <FieldAsterisk />
            </Label>
            <FileUpload
              icon={Interfaces.Photo}
              name="image"
              defaultValue={defaultValues?.image}
            />
            <FieldMessage message={state.error?.image?.join(' and ')} />
            <FieldHelp>
              This field is only available for reviewers. The reviewer will
              upload a screenshot of the project.
            </FieldHelp>
          </Field>
          <Field>
            <Label>Phase</Label>
            <Select
              onValueChange={handlePhaseChange}
              name="phase"
              value={phase}>
              <SelectTrigger placeholder="Select Phase" />
              <SelectContent>
                <SelectItem value="-1" disabled>
                  Select Phase
                </SelectItem>
                {phaseEnums.map((phase) => (
                  <SelectItem value={phase}>{phase}</SelectItem>
                ))}
              </SelectContent>
              <FieldMessage message={state.error?.phase} />
            </Select>
          </Field>
          {phase === 'rejected' ? (
            <Field>
              <Label>Note</Label>
              <Textarea
                name="note"
                rows={8}
                defaultValue={defaultValues?.note}
              />
              <FieldHelp>
                Provide a note to the participant explaining why the submission
                was rejected.
              </FieldHelp>
            </Field>
          ) : null}
        </>
      ) : null}
      <SubmitButton />
    </form>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full" progress={pending}>
      Submit
    </Button>
  );
};

export default SubmissionForm;
