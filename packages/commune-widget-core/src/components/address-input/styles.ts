import { css } from 'lit';

export const styles = css`
  .inputAddressSection {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 0.5rem;
  }

  .inputAddressContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
  }

  .inputAddress {
    border-radius: 0.75rem;
    border: 0.063rem solid var(--zinc-200);
    font-size: 0.875rem;
    text-align: left;
    resize: none;
    box-sizing: border-box;
    overflow: hidden;
    line-height: 1.5rem;
    height: 2.5rem;
    padding: 0.5rem;
  }

  .inputAddress:focus {
    outline: none;
    border: 0.063rem solid var(--zinc-200);
  }

  .error {
    border-color: red;
  }

  .errorMessage {
    color: red;
    font-weight: 300;
    font-size: 0.75rem;
  }

  .labelContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: var(--zinc-400);
    margin-bottom: 0.1rem;
  }
`;
