
<?php
if (!defined('_PS_VERSION_')) {
    exit;
}
class CrosslogTestR extends Module
{
    public function __construct()
    {
        $this->name = 'crosslogtestr';
        $this->tab = 'front_office_features';
        $this->version = '1.0.1';
        $this->author = 'Reouven';
        $this->need_instance = 0;
        $this->ps_versions_compliancy = [
            'min' => '1.6',
            'max' => _PS_VERSION_
        ];
        $this->bootstrap = true;

        parent::__construct();
        $this->displayName = $this->l('crosslogtestr');
        $this->description = $this->l('Gestion de retour client');

        $this->confirmUninstall = $this->l('Are you sure you want to uninstall?');

        if (!Configuration::get('MYMODULE_NAME')) {
            $this->warning = $this->l('No name provided');
        }
    }


    public function install()
    {

        if (!(parent::install() && $this->registerHook('header') && $this->registerHook('displayadminorder'))) {

            return false;
        }

        return true;
    }

    public function hookDisplayAdminOrder()
    {
     $this->context->controller->addJS("https://github.com/reouvenBenitah/prestashop_modules/blob/master/views/js/crosslog_test.js");
    $this->context->controller->addCSS("https://github.com/reouvenBenitah/prestashop_modules/blob/master/views/css/crosslog_test.css");
    }
}