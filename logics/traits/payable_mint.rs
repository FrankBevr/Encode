use ink::prelude::string::String as PreludeString;
use ink::prelude::vec::Vec;
use openbrush::{
    contracts::psp34::PSP34Error,
    traits::{AccountId, Balance},
};

#[openbrush::wrapper]
pub type PayableMintRef = dyn PayableMint;

#[openbrush::trait_definition]
pub trait PayableMint {
    #[ink(message, payable)]
    fn mint(&mut self, to: AccountId, mint_amount: u64, hps: Vec<u64>) -> Result<(), PSP34Error>;
    #[ink(message)]
    fn set_base_uri(&mut self, uri: PreludeString) -> Result<(), PSP34Error>;
    #[ink(message)]
    fn withdraw(&mut self) -> Result<(), PSP34Error>;
    #[ink(message)]
    fn hp(&self) -> Vec<(u64, u64)>;

    #[ink(message)]
    fn token_uri(&self, token_id: u64) -> Result<PreludeString, PSP34Error>;
    #[ink(message)]
    fn max_supply(&self) -> u64;
    #[ink(message)]
    fn price(&self) -> Balance;
}
